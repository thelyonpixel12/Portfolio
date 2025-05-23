/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* BODY */
body {
    font-family: 'Segoe UI', sans-serif;
    background: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* HEADER */
header {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 2rem 1rem;
    animation: fadeInUp 1s ease-in-out;
}

nav {
    margin-top: 10px;
}

nav a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}

/* SECTION */
section {
    padding: 50px 20px;
    max-width: 1000px;
    margin: auto;
    animation: fadeInUp 1s ease-in-out;
}

h2 {
    margin-bottom: 20px;
    border-bottom: 2px solid #000;
    display: inline-block;
}

/* GALLERY */
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.item {
    background: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    text-align: center;
    transition: transform 0.3s ease;
}

.item:hover {
    transform: scale(1.03);
}

.item img,
.item video {
    width: 100%;
    display: block;
}

/* CONTACT */
#contact a {
    color: #000;
    text-decoration: none;
}

#contact a:hover {
    text-decoration: underline;
}

/* FOOTER */
footer {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

/* ANIMATIONS */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .gallery {
        flex-direction: column;
        align-items: center;
    }
}