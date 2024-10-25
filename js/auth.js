
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyheJSu9-V6HtGzXzybaibZuxFWaafXGk",
    authDomain: "panon-a2682.firebaseapp.com",
    projectId: "panon-a2682",
    storageBucket: "panon-a2682.appspot.com",
    messagingSenderId: "420826947743",
    appId: "1:420826947743:web:4d7d876d1d6b54a40f02aa",
    measurementId: "G-GXJ54WQNC9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup Function
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            document.getElementById('message').textContent = `Signup successful! Welcome ${user.email}`;
            console.log('User Email:', user.email);
            
            // Redirect to the login page
            window.location.href = 'login.html';
        })
        .catch(error => {
            document.getElementById('message').textContent = error.message;
        });
});

// Login Function
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            document.getElementById('message').textContent = `Login successful! Welcome back, ${user.email}`;
            console.log('Logged in as:', user.email);

            // Redirect to the homepage
            window.location.href = 'index.html';
        })
        .catch(error => {
            document.getElementById('message').textContent = error.message;
        });
});
