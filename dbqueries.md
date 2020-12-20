# Database Queries
Data: More places details for a given listingID.

## PostgreSQL
```
lilykong=# SELECT * FROM more_places_by_listing inner join listings on more_places_by_listing.suggestionID = listings.listingID WHERE more_places_by_listing.listingID=1;
 id | listingid | suggestionid | rank | listingid |                                  pictureurl                                  |    locationname    | score | reviewcount |         roomtype          |           roomname           | bedcount | costpernight
----+-----------+--------------+------+-----------+------------------------------------------------------------------------------+--------------------+-------+-------------+---------------------------+------------------------------+----------+--------------
  1 |         1 |      6193988 |    1 |   6193988 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb233.jpg |  Andres Falls      |  5.31 |         163 |  Ergonomic Concrete Mouse |  Refined Rubber Gloves       |        2 |           82
  2 |         1 |      2404409 |    2 |   2404409 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb704.jpg |  Katrine Corners   |  1.58 |           9 |  Gorgeous Rubber Cheese   |  Incredible Steel Tuna       |        1 |           56
  3 |         1 |      2083738 |    3 |   2083738 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb238.jpg |  Raul Vista        |  4.64 |          21 |  Unbranded Rubber Chair   |  Sleek Frozen Tuna           |        1 |          117
  4 |         1 |      7370032 |    4 |   7370032 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb271.jpg |  Crist Spring      |  2.86 |         192 |  Tasty Steel Towels       |  Small Concrete Pizza        |        4 |           61
  5 |         1 |      9139604 |    5 |   9139604 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb744.jpg |  Schuster Junction |  1.24 |         155 |  Ergonomic Wooden Chips   |  Gorgeous Plastic Table      |        1 |          196
  6 |         1 |      4401204 |    6 |   4401204 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb11.jpg  |  Darwin Stream     |  3.1  |         121 |  Licensed Concrete Tuna   |  Rustic Cotton Hat           |        3 |           56
  7 |         1 |      8080703 |    7 |   8080703 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb12.jpg  |  Geovany Knoll     |  1.65 |          78 |  Small Steel Cheese       |  Awesome Rubber Sausages     |        3 |           53
  8 |         1 |       566947 |    8 |    566947 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb61.jpg  |  Blaise Throughway |  4.94 |         193 |  Refined Fresh Cheese     |  Small Frozen Pizza          |        4 |          111
  9 |         1 |      7472051 |    9 |   7472051 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb152.jpg |  Alysson Shoal     |  3.72 |          56 |  Incredible Metal Shirt   |  Intelligent Rubber Keyboard |        2 |           94
 10 |         1 |      4497173 |   10 |   4497173 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb892.jpg |  Prohaska Union    |  3.07 |          36 |  Handcrafted Fresh Shoes  |  Small Cotton Bacon          |        1 |          206
 11 |         1 |      9487180 |   11 |   9487180 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb851.jpg |  Destini Mews      |  1.29 |          91 |  Refined Plastic Pants    |  Rustic Granite Mouse        |        4 |           92
 12 |         1 |      8615553 |   12 |   8615553 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb638.jpg |  Marquardt Plains  |  3.31 |          76 |  Generic Steel Chair      |  Small Steel Chips           |        2 |          205
(12 rows)

```


## Cassandra

```
cqlsh> SELECT * FROM listings.more_places_by_listing WHERE listingID = 1;

 listingid | rank | bedcount | costpernight | locationname      | more_places | pictureurl                                                                   | reviewcount | roomname                   | roomtype                   | score
-----------+------+----------+--------------+-------------------+-------------+------------------------------------------------------------------------------+-------------+----------------------------+----------------------------+-------
         1 |    1 |        3 |          213 |      Laurine Port |     8084958 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb973.jpg |           7 |         Small Wooden Pizza |         Tasty Rubber Chips |  3.49
         1 |    2 |        1 |          162 |  Vivian Underpass |     1009602 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb608.jpg |          29 |            Sleek Fresh Car |  Practical Concrete Gloves |  2.92
         1 |    3 |        3 |          118 |       Cordia Port |     6514553 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb135.jpg |         191 |   Handcrafted Wooden Chips |         Rustic Steel Chips |  3.76
         1 |    4 |        4 |          134 |      Harber Haven |     4540156 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb514.jpg |         150 |        Awesome Cotton Tuna |  Fantastic Concrete Cheese |  2.91
         1 |    5 |        1 |           62 |   Mann Extensions |     7403169 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb830.jpg |          38 |     Handcrafted Fresh Tuna |         Tasty Plastic Fish |  4.82
         1 |    6 |        1 |          110 |    Graham Prairie |     5874939 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb301.jpg |         194 |   Intelligent Frozen Pants |        Refined Metal Shirt |  5.73
         1 |    7 |        2 |          189 |   Beer Extensions |     3257336 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb212.jpg |         125 |       Gorgeous Soft Gloves |           Rustic Steel Hat |   3.2
         1 |    8 |        3 |          218 |      Little Place |     4777375 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb505.jpg |         184 |    Unbranded Granite Shirt |        Practical Steel Hat |  5.44
         1 |    9 |        3 |          225 |     Sawayn Island |     2255748 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb140.jpg |         194 |   Intelligent Wooden Pants |      Fantastic Wooden Ball |  1.35
         1 |   10 |        1 |           65 |    Christop Roads |     6257663 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb147.jpg |          53 |   Intelligent Frozen Mouse |       Tasty Granite Cheese |  3.45
         1 |   11 |        3 |           88 |     Domenico Rest |     8922609 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb212.jpg |         133 |           Small Frozen Hat |        Awesome Metal Pants |  1.74
         1 |   12 |        4 |          191 |   Kulas Stravenue |     2046110 |  https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb198.jpg |         155 |  Intelligent Wooden Towels |       Fantastic Soft Chips |  2.62

(12 rows)
```