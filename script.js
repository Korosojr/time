// Timer functionality
function startCountdown() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
  
    let totalTime = hours * 3600 + minutes * 60 + seconds;
    if (totalTime <= 0) {
      alert('Please enter a valid time.');
      return;
    }
  
    const display = document.getElementById('timerDisplay');
    const countdownInterval = setInterval(() => {
      let hrs = Math.floor(totalTime / 3600);
      let mins = Math.floor((totalTime % 3600) / 60);
      let secs = totalTime % 60;
      display.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
      if (totalTime === 0) {
        clearInterval(countdownInterval);
        display.textContent = 'Time’s up!';
      } else {
        totalTime--;
      }
    }, 1000);
}

// Task Management
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const newTask = todoInput.value.trim();
    if (newTask === '') {
      alert('Please enter a task.');
      return;
    }

    const tasks = getTasks();
    tasks.push({ text: newTask, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    todoInput.value = '';
    loadTasks();
}

function loadTasks() {
    const tasks = getTasks();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.onchange = () => handleTaskCompletion(index, checkbox.checked);

      const textNode = document.createTextNode(task.text);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Done';
      deleteButton.onclick = () => removeTask(index);

      li.appendChild(checkbox);
      li.appendChild(textNode);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
}

function handleTaskCompletion(index, isCompleted) {
    const tasks = getTasks();
    tasks[index].completed = isCompleted;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
}

// YouTube playback functionality
function playYouTube() {
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
    const youtubePlayer = document.getElementById('youtubePlayer');
    
    if (videoId) {
      youtubePlayer.innerHTML = `
        <iframe 
          width="300" 
          height="200" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      `;
      document.querySelector('.music input').style.display = 'none'; // Hide the input
      document.querySelector('.music button').style.display = 'none'; // Hide the play button
    } else {
      alert('Please enter a valid YouTube URL');
    }
}

// Fullscreen toggling
function toggleFullscreen() {
    const container = document.querySelector('.container');
    if (!document.fullscreenElement) {
      container.classList.add('fullscreen');
      container.requestFullscreen();
      generateRainDrops(100);
    } else {
      container.classList.remove('fullscreen');
      document.exitFullscreen();
    }
}

function generateRainDrops(count) {
    const rainContainer = document.querySelector('.rain');
    rainContainer.innerHTML = ''; // Clear existing raindrops
    for (let i = 0; i < count; i++) {
      const drop = document.createElement('div');
      drop.classList.add('rain-drop');
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDelay = `${Math.random() * 2}s`;
      rainContainer.appendChild(drop);
    }
}








// Function to open modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
}

// Function to close modals
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('overlay');
    modals.forEach(modal => modal.style.display = 'none');
    overlay.style.display = 'none';
}






// Sets timer for a Pomodoro session
function setTimer() {
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 25;
    document.getElementById('seconds').value = 0;
}

// Sets timer for a short break
function setShortBreak() {
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 5;
    document.getElementById('seconds').value = 0;
}

// Sets timer for a long break
function setLongBreak() {
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 15;
    document.getElementById('seconds').value = 0;
}








function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/login');
  }
  
  app.get('/resource', isLoggedIn, (req, res) => {
    res.send('Secret Resource');
  });
  





  app.use(express.static('public'));










