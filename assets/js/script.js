$(function () {
  let currentTime = dayjs();
  let currentHour = currentTime.hour();
  let calendarDiv = $(".calendarDiv");
  $("#currentDay").text(currentTime.format("dddd, MMMM D"));

  function createCards() {
    for (let i = 9; i < 12; i++) {
      let hourCard = $(`<div id="hour-${i}" class="row time-block past">
      <div class="col-2 col-md-1 hour text-center py-3">${i}AM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>`);
      calendarDiv.append(hourCard);

      if (i < currentHour) {
        hourCard.addClass("past");
        hourCard.removeClass("present");
        hourCard.removeClass("future");
      }
      if (i === currentHour) {
        hourCard.addClass("present");
        hourCard.removeClass("past");
        hourCard.removeClass("future");
      }
      if (i > currentHour) {
        hourCard.addClass("future");
        hourCard.removeClass("present");
        hourCard.removeClass("past");
      }
    }
    for (let i = 12; i < 18; i++) {
      let hourCard2 = $(`<div id="hour-${i}" class="row time-block past">
      <div class="col-2 col-md-1 hour text-center py-3">${i}PM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>`);
      calendarDiv.append(hourCard2);

      if (i < currentHour) {
        hourCard2.addClass("past");
        hourCard2.removeClass("present");
        hourCard2.removeClass("future");
      }
      if (i === currentHour) {
        hourCard2.addClass("present");
        hourCard2.removeClass("past");
        hourCard2.removeClass("future");
      }
      if (i > currentHour) {
        hourCard2.addClass("future");
        hourCard2.removeClass("present");
        hourCard2.removeClass("past");
      }
    }
    return true;
  }
  function retrieve() {
    for (let i = 9; i < 18; i++) {
      let savedHour = "hour-" + i;
      let savedItem = localStorage.getItem("saved_" + savedHour);
      if (savedItem !== null) {
        $("#" + savedHour + " textarea").val(savedItem);
      }
      calendarDiv.children().val(savedItem)
    }
   
  }
  createCards()
  retrieve()

  $(".saveBtn").on("click", function saveButton() {
    // Get the input and hour elements
    let input = $(this).parent().children().eq(1);
    let hour = $(this).parent().attr("id");
    localStorage.setItem("saved_" + hour, input.val());
  });
});
