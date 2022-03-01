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
<!-- events -->
<div class="events-wrap closed">
    <aside class="events">
        <span class="arrow" id="events-up-arrow">
            <i class="fas fa-caret-up"></i>
        </span>
        <h3>Events</h3>
        <ul id="events-list">

        </ul>
        <span class="arrow" id="events-down-arrow">
            <i class="fas fa-caret-down"></i>
        </span>

    </aside>
    <div class="big-arrow closed">
    </div>
</div>
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
//FIXME:  {  printInfo(this) }
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