const auth = {
    check() {
        const isAuthenticated = localStorage.getItem('mh_authenticated');
        // If not authenticated and not currently on the login page, redirect
        if (!isAuthenticated && !window.location.href.includes('login.html')) {
            window.location.href = 'login.html';
        }
    },
    login(email, password) {
        // In a real app, this validates against a backend API
        if (email && password) {
            localStorage.setItem('mh_authenticated', 'true');
            window.location.href = 'index.html';
        }
    },
    logout() {
        localStorage.removeItem('mh_authenticated');
        window.location.href = 'login.html';
    }
};

// Run immediately before DOM loads to prevent page flickering
auth.check();