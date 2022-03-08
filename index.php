<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/events.css">
    <link rel="stylesheet" href="style/reserve.css">
    <link rel="stylesheet" href="style/reserved-nav.css">
    <link rel="stylesheet" href="style/reserved-nav-li.css">
    <link rel="stylesheet" href="style/events-carousel.css">




    <link rel="stylesheet" href="style/footer.css">
    <link rel="stylesheet" href="style/style.css">
    <!-- date picker -->

    <link rel="stylesheet" href="jquery-ui-1.13.0/jquery-ui.min.css">
    <script src="jquery-ui-1.13.0/external/jquery/jquery.js"></script>
    <script src="jquery-ui-1.13.0/jquery-ui.min.js"></script>
    <!-- jquery -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
    <!-- fontAwesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">


    <!-- slick carousel -->
    <link rel="stylesheet" type="text/css" href="slick-1.8.1/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="slick-1.8.1/slick/slick-theme.css" />
    <script type="text/javascript" src="slick-1.8.1/slick/slick.min.js"></script>
    <!--      -->

    <script src="script/filterPlugin.js"></script>
    <script src="script/global.js"></script>
    <script>
    const MIN_DAYS = 4;


    function prepareAndOpenResForm(mo, day, year) {
        let prettyDate = day + ' ' + mo + ' , ' + year;

        const legend = document.getElementsByTagName('legend')[0];
        legend.innerHTML = prettyDate;

        let form = document.querySelector('.form-content');

        form.style.display = 'grid';

        const datepicker = document.getElementById('date-picker');
        datepicker.style.display = 'none';
    }
    </script>
</head>


<body>
    </script>
    <script src="script/menuItems.js"></script>
    <?php include 'pages/header.php'; ?>
    <div class="wrapper">
        <main class="full">
            <?php include 'pages/video.html'; ?>
        </main>
        <?php include 'pages/footer.html'; ?>
    </div>

    <script src="script/loadEvents.js"></script>
    <script src="script/navigation.js"></script>
    <script src="script/mobile-nav.js"></script>
    <script src="script/nav-open_close-SideBars.js"></script>
    <script src="script/reserved-li-script.js"></script>
    <script src="script/loadReserved.js"></script>
    <script src=" script/events.js">
    </script>
    <script src="script/searchForm.js"></script>

    <script src="script/touch-screen.js"></script>


</body>

</html>