//#region  events object
var events = [{
        name: "Music Event",
        date: "1.1.2022",
        color: "cyan",
        id: "234",
        startTime: "18:00",
        endTime: "21:30",
        description: "<p>Local band performance, every 1st day of the month.</p>",
    },

    {
        name: "Art Gallery",
        date: "23.1.2022",
        color: "yellow",
        id: "879",
        startTime: "10:00",
        endTime: "In 7 days",
        description: "<p>Art gallery from *Name*.she is firstly exposing her artwork in our coffee shop.<br> The gallery will last for a week and you may buy, get inspired and just enjoy her gorgeous paintings!  </p>",
    },

    {
        name: "Happy Valentines",

        date: "14.2.20022",
        startTime: "14:20",
        endTime: "22:00",
        color: "pink",
        id: "145",
        description: "<p>The celebration of LOVE is coming soon! join us to spend to time with your loved ones and get great valentine special Deals!!</p>",
    },

    {
        name: "Every Sunday",

        date: "after 6pm",

        id: "623",
        startTime: "18:00",
        endTime: "21:00",
        description: " <p>Happy hour on any drink from the menu..</p>",
    },

    {
        name: "Anniversary!",

        date: "24.5.2022",
        id: "5",
        startTime: "8:00",
        endTime: "00:00",
        description: "<p>Celebration of our Anniversary!</p><p>Special deals for all out Clients! no need to order a Seat!</p>",
    },
    {
        name: "Ipsum",

        date: "2.2.2222",
        color: "grey",
        id: "89",
        startTime: "15:00",
        endTime: "17:00",
        description: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus similique minus repellendus voluptatibus possimus quibusdam magni expedita ex ipsa, animi hic at earum dolorum neque quisquam enim cupiditate Sunt sequi odio quia!Possimus quas expedita corrupti suscipit eaque dignissimos ? Quis dignissimos impeditcorporis velit temporibus esse dolore quo distinctio incidunt ab iste.Facereiste inventore.</p> ",
    },

    {
        name: "Lorem",
        startTime: "15:00",
        endTime: "17:00",
        date: "1.1.1111",
        id: "34",
        description: "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio natus atque illo sint officiis quo! Iusto cumque corporis, aliquid omnis sed fugit sequi dolores voluptate, adipisci blanditiis qui vitae consectetur?  Ad laboriosam, quia sequi ducimus quasi inventore ipsum, dolores a recusandae dolor quos aperiam laudantium porro quo. Beatae cum maxime harum dicta? Ea explicabo amet laboriosam cupiditate sit impedit numquam?Distinctio illum laborum quod? Maxime alias consectetur eum minima porro explicabo pariatur ducimus quia similique praesentium corporis veritatis et maiores necessitatibus error ratione voluptas possimus aut, in perspiciatis vel facilis.Illo impedit nesciunt voluptas, atque eveniet voluptate, delectus laudantium repudiandae excepturi suscipit expedita saepe dolorem, iusto temporibus est ducimus odio reiciendis eaque sit? Asperiores itaque sit numquam est quis sint.Molestias neque quia nostrum modi, officiis aspernatur maxime ipsam ad. Omnis inventore amet perferendis, nemo laboriosam harum autem vero veritatis odit quasi quia assumenda dolores nobis tenetur. Eius, ipsa beatae.</p><p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam fuga,id nam libero dolor et dolorum quaerat,cum necessitatibus eum,beatae minima ducimus aut mollitia est excepturi esse illum officia</p > ",
    },

    {
        name: "Happy Birthday",
        startTime: "15:00",
        endTime: "23:00",
        date: "7.8.2022",
        id: "35",
    },

    {
        name: "Another",
        startTime: "15:00",
        endTime: "17:00",
        date: "3.3.3333",
        id: "36",
    },

    {
        name: "Holidays",
        startTime: "06:00",
        endTime: "18:00",
        date: "6.6.6666",

        id: "76",
    },
];
//#endregion

////////////////////////////////////
const $modal = $(".modal");

//elements:
const $btmToggleArr = $(".big-arrow");
const $innerList = $("#events-list");
const $arrow = $(".arrow");
const $evModalCont = $(".events-modal-content");

///////////////////////////////////

var number = 0;

let readyEvents = events.map(function(event, number) {
    let color = "";
    if (event.color) {
        color = event.color;
    }

    let li = $("<li></li>");
    li.addClass(event.id);
    li.bind("click", () => {
        $modal.css("display", "grid");

        $(".slik-carousel").slick("slickGoTo", number - 1);
        $innerList.slideUp();

        $arrow.css("cursor", "default");
        $btmToggleArr.addClass("closed");
        open = false;
    });

    let content = `<h4 class="event-name ${color}">${event.name}</h4><span class="event-date">${event.date}</span>`;
    let modal = `  <div class="event-description-slide">
<div class="slider-content">
    <h3 style="color:${color}">${event.name}</h3>
    <!-- <div class="carousel-time-grid"> -->
    <span class="carousel-date dateTime">
    ${event.date}
    </span>
    <div class="carousel-time dateTime">
        <p>
            Start: <span class="start-time">
                ${event.startTime}
            </span>
        </p>
        <p>End: <span class="end-time">
                ${event.endTime}
            </span></p>
    </div>
    <!-- </div> -->
    <div class="description">
        ${event.description}
    </div>
    <div class="carousel-btn">
        <button>Reserve for this event!</button>
    </div>
</div>
</div>`;
    li.html(content);
    number = number + 1;
    return { li: li, modal: modal };
    //return `<li><h4 class="event-name ${color}">${event.name}</h4><span class="event-date">${event.date}</span></li>`;
});

let lis = readyEvents.map(function(ev) {
    return ev.li;
});

let modals = readyEvents.map(function(ev) {
    return ev.modal;
});
//console.log(lis); //logs = > s.fn.init  (works)
lis.join("");
modals.join("");

$innerList.html(lis);
//$evModalCont.html(modals);

//////////////////////////////////

// $(".close").click(() => {
// $modal.hide();
// });