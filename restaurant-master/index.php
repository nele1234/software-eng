require 'flight/Flight.php';

Flight::route('/', function(){
  echo 'hello world!';
});

Flight::start();

Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=template', 'root', ''), function ($db) {
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
});


Flight::route('GET|POST /subscribe', function () {
    $conn = Flight::db();

    $user_email = Flight::request()->query->email;
    $date = Flight::request()->query->date;

    $query = "Select user_email from newsletter where user_email = ?";
    $stmt = $conn->prepare($query);
    $stmt->execute([$user_email]);

    $results = $stmt->rowCount();

    if ($results > 0) {
        echo 'email';
    } else {
        $sql = "INSERT INTO `newsletter` (`user_email`, `date`) values (?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->execute([$user_email, $date]);

        if ($stmt) {
            echo ('subscribe');
        } else {
            echo ('failed');
        }
    }
});