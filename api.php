$localtime = localtime();
$today = localtime(time(), true);


$examplePoint = 'http://www.global-mind.org/cgi-bin/eggdatareq.pl?z=1&year=2018&month=4&day=1&stime=12:9:1&etime=12:9:2&gzip=no';

$thePastStamp = time() - 1;

$thePast = getdate($thePastStamp);


$endpoint = "http://www.global-mind.org/cgi-bin/eggdatareq.pl?z=1&year=" . 
        ($thePast["year"]) . 
        "&month=" . $thePast["mon"] . 
        "&day=" . $thePast["mday"] .
        "&stime=" . $thePast["hours"] . 
        ":" . $thePast["minutes"] . 
        ":" . $thePast["seconds"] . 
        "&etime=" . $today["tm_hour"] . 
        ":" . $today["tm_min"] . 
        ":" . $today["tm_sec"] . 
        "&gzip=no";


$rawRequest = file_get_contents($examplePoint);



$splitRequest = explode("\n",$rawRequest);

$lCount = 0;
$keys = false;
$row = [];
$row["data"] = false;
print_r($row)
for ($i = 0; $i < count($splitRequest); $i++) {
    $line = explode(",",$splitRequest[$i]);
    
    var_dump($line[0]);

        switch ($line[0]) {
            case "12":
                array_shift($line);
                array_shift($line);
                array_shift($line);
                $keys = $line;
                print_r($keys);
                break;
            case "13":
            a
                echo "i equals 13";
                $t =
                break;
            case "11":
                echo "i equals 11";
                break;
             case "10":
                echo "i equals 10";
                break;
        }

}