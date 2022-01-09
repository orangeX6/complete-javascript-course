'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//////////////////////////////////////////////////
/////////////////////////////////////////////////
//-> WORKOUT PARENT CLASS
class Workout {
  //! STILL NOT A PART OF JS OFFICIALLY
  //? In Real world, we should never create ids on our own but always use some library to create a unique id.
  //Here we are just converting date to numeric and using last 10 digits as id
  id = (Date.now() + '').slice(-10);
  date = new Date();
  clicks = 0;

  constructor(coords, distance, duration) {
    //? DEFINING DATE AND ID ACC. TO ES6
    //this.date = ...
    //this.id = ...
    this.coords = coords; //[lat,lng]
    this.distance = distance; // in kms
    this.duration = duration; // in mins
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

/////////////////////////////////////////////
/////////////////////////////////////////
//-> RUNNING CHILD CLASS
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    // // this.type = 'running'
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    //  min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

//////////////////////////////////////////////
/////////////////////////////////////////////
//-> CYCLING CHILD CLASS
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([72, 19], 5.2, 24, 178);
// const cycle1 = new Cycling([72, 19], 27, 95, 523);
// console.log(run1, cycle1);

////////////////////////////////////////
////////////////////////////////////////
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//-> APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #workouts = [];

  //>> CONSTRUCTOR
  constructor() {
    //// GET USER'S POSITION
    this._getPosition();

    ////GET DATA FROM LOCAL STORAGE
    this._getLocalStorage();

    //// ATTACH EVENT HANDLERS
    form.addEventListener('submit', this._newWorkout.bind(this));
    //! no need to bind this, as the _toggleElev function doesn't use it
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  //>> GET POSITION
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  //>> LOAD MAP
  _loadMap(position) {
    //// console.log(this);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //// console.log(position);
    console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);

    const coords = [latitude, longitude];

    //('map') is the id of html element
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    //// console.log(this.#map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling Clicks on Map
    this.#map.on('click', this._showForm.bind(this));

    //Render the markers
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  //>> DISPLAY FORM
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  //>> HIDE FORM
  _hideForm() {
    // // EMPTY INPUTS
    // prettier-ignore
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  //>> TOGGLE ELEVATION FIELD
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  //>> CREATE NEW WORKOUT
  _newWorkout(e) {
    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    // //console.log(this.#mapEvent);
    let workout;

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // If activity running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //// Check if data is valid
      if (
        // // !Number.isFinite(distance) ||
        // // !Number.isFinite(duration) ||
        // // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If activity cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //// Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);
    // //console.log(workout);

    // Render workout on map as marker
    //? No need to use .bind(this) because we ourselves are calling this method using this
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + Clear Input Fields
    this._hideForm();

    //Set local storage to all workouts
    this._setLocalStorage();
  }

  //>> DISPLAY WORKOUT TAGS ON MAP.
  //CALLED FROM _newWorkout
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
        //*  .setContent('Workout')  //Also works
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'} ${workout.description}`
      )
      .openPopup();
  }

  //>> DISPLAY WORKOUT LIST
  //CALLED FROM _newWorkout
  _renderWorkout(workout) {
    let html = ` 
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon"> ${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
          <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
        `;

    if (workout.type === 'cycling')
      html += `
          <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li> 
     `;

    form.insertAdjacentHTML('afterend', html);
  }

  //>> Move to Popup on Map
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    //// console.log(workoutEl, this);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // //console.log(workout);

    // Using the public interface
    //!THis won't work when the objects are retrieved from local storage. The reason being, the prototype chain is lost.
    //-> CHECK THE PROTOTYPES ON OBJECTS RETRIEVED FROM LOCAL STORAGE VS NEW OBJECTS CREATED
    //// workout.click();

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  //>> STORING DATA IN BROWSER(LOCAL STORAGE)
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  //>> DISPLAYING DATA FROM LOCAL STORAGE IN THE APP
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    //// console.log(data);
    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload(); //reloads the page in browser
  }
}

const app = new App();
