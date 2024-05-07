body {
    font-family: Arial, sans-serif;
}
#log {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    overflow-y: scroll;
    height: 300px;
}
</style>
</head>
<body>
<h1>Lycanthrope's Log</h1>
<div id="log"></div>
<input type="text" id="eventInput" placeholder="Enter event...">
<button onclick="recordEvent()">Record Event</button>

<script>
function recordEvent() {
    const eventInput = document.getElementById("eventInput");
    const event = eventInput.value;
    const log = document.getElementById("log");
    const timestamp = new Date().toLocaleString();
    log.innerHTML += <p><strong>${timestamp}:</strong> ${event}</p>;
    eventInput.value = "";
}
</script>
</body>
</html>
```