<nav>
    <h3 class="logo navigation">Coffee Shop</h3>
    <span class="mobile-nav">
        <i id="down" class="fas fa-caret-square-down"></i>
        <i id="up" class="fas fa-caret-square-up"></i>

    </span>
    <div class="nav-btns">
        <button type="button" class="nav-btn navigation" value="about">
            about
        </button>
        <button type="button" class="nav-btn navigation" value="menu" id="menu-btn">
            menu
        </button>
        <button type="button" class="nav-btn navigation" value="reserve" id="reserve-btn">
            reservation
        </button>
    </div>
    <div class=" events-btns">
        <button class="nav-btn" id="reserved-btn">reserved</button>
        <button class="nav-btn" id="events-btn">events</button>

    </div>

</nav>
<!--TODO: CREATE MODALS FOR EVENTS AND RESERVATIONS -->
<!-- reservations -->
<div class="reserved-nav" id="start-nav">
    <div class='msg' id="search-reservations">
        <p>Currently you don't have any reservations saved in your browser</p>
        <p style='font-size:small;color:coral;'>Create a new one on the <span
                onclick='clickLinkToReserve()'>Reservation</span> page.
        </p>
        <p>Try to search through our database via phone number</p>
        <form class="searchForm" action="" id="search-reservations-form">
            <input type="tel" placeholder="051-234-5678">
            <input type="submit">
        </form>
    </div>
    <ul>
    </ul>
    <button id="delete-All-reservations-btn">Clear</button>
    <span class="relative">
        <span class="tooltip" id="reservation-delete-tooltip">Delete from
            browser</span>
    </span>
</div>
<!--TODO: FETCH EVENTS -->
<!-- events -->
<aside class="events">
    <span class="arrow" id="events-up-arrow">
        <i class="fas fa-caret-up"></i>
    </span>
    <h3>Events</h3>
    <ul id="events-list">
        <li>
            <h4 class="event-name ">Music Event</h4><span class="event-date">1.1.2022</span>
        </li>
        <li>
            <h4 class="event-name yellow">Art Gallery</h4><span class="event-date">
                23.1.2022
            </span>
        </li>
        <li>
            <h4 class="event-name pink">Happy Valentines</h4>
            <span class="event-date">
                14.2.20022
            </span>
        </li>
        <li>
            <h4 class="event-name grey">Every Sunday</h4>
            <span class="event-date">
                after 6pm
            </span>
        </li>
        <li>
            <h4 class="event-name ">Anniversary!</h4>
            <span class="event-date">
                24.5.2022
            </span>
        </li>
        <li>
            <h4 class="event-name">Ipsum</h4>
            <span class="event-date">
                2.2.2222
            </span>
        </li>
        <li>
            <h4 class="event-name">Lorem</h4>
            <span class="event-date">
                1.1.1111
            </span>
        </li>
        <li>
            <h4 class="event-name ">Happy Birthday</h4>
            <span class="event-date">
                7.8.2022
            </span>
        </li>
        <li>
            <h4 class="event-name">Another</h4>
            <span class="event-date">
                3.3.3333
            </span>
        </li>
        <li>
            <h4 class="event-name">Holidays</h4>
            <span class="event-date">
                6.6.6666
            </span>
        </li>
    </ul>
    <span class="arrow" id="events-down-arrow">
        <i class="fas fa-caret-down"></i>
    </span>

</aside>
<!-- events container -->

<section class="events-modal">
    <div class="events-container">

    </div>
</section>

<!-- print button -->
<span class="print" onclick="window.print();return false">
    <i class=" fas fa-print"></i>
</span>
<script>
function clickLinkToReserve() {
    let btn = document.querySelector('#reserve-btn');
    btn.click();
}
//!fix this {  printInfo(this) }
function printInfo(ele) {
    var openWindow = window.open("", "title", "attributes");
    openWindow.document.write(ele.nextSibling.childNode.innerHTML);
    openWindow.document.close();
    openWindow.focus();
    openWindow.print();
    openWindow.close();
}
</script>
<script>

</script>