/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
        //document.addEventListener('volumeupbutton', this.callbackFunction, false);
//        $(document).ready(function(){
//            $("#listType").click(function(){
//                    $.getJSON("http://huyheo.tk/api/get_category_index/", function(result){
//                        $.each(result, function(i, field){
//                            $("#testJson").append(field + " ");
//                        });
//                    });
//                });
//            });
    },
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('test');
        //document.addEventListener('deviceready', this.callbackFunction, false);
        //var selectElement = document.getElementsByTagName(id);
        //selectElement[0].addEventListener('click', app.dialogAlert);
        //app.myFunction();
        //document.getElementById('listType').addEventListener('click', app.getDataJson);
        
        $(document).ready(function(){
            $.ajax({
                type:"GET", 
                url: "http://huyheo.tk/api/get_category_index", 
                success: function(data) {
                    //var jsonData = JSON.stringify(data);
                    var jsonString = JSON.stringify(data.categories); 
                    
                    var parseJson = JSON.parse(jsonString);
                    
                    //console.log();
                    var myDiv = document.getElementById("myDiv");

                    //Create array of options to be added
                    //var array = ["Volvo","Saab","Mercades","Audi"];
                    var unOrderList = document.createElement("ul");
                    unOrderList.attributes.setNamedItem = "listType";
                    unOrderList.className = "table-view";
                    
                    
                    for (var i = 0; i < parseJson.length; i++) {
                        var liElement = document.createElement("li");
                        liElement.className = "table-view-cell";
                        var liElementText = document.createTextNode(parseJson[i].title);
                        liElement.appendChild(liElementText);
                        
                        var spanElement = document.createElement("span");
                        spanElement.className = "badge";
                        var spanElementText = document.createTextNode(parseJson[i].post_count);
                        spanElement.appendChild(spanElementText);
                        
                        liElement.appendChild(spanElement)
                        liElement.attributes.setNamedItem = parseJson[i].id;
                    
                        unOrderList.appendChild(liElement);
                    }
                    
                    myDiv.appendChild(unOrderList);
//                    // Create the list element:
//                    var list = document.createElement('ul');
//
//                    for(var i = 0; i < array.length; i++) {
//                        // Create the list item:
//                        var item = document.createElement('li');
//
//                        // Set its contents:
//                        item.appendChild(document.createTextNode(array[i]));
//
//                        // Add it to the list:
//                        list.appendChild(item);
//                    }

//                    <ul class="table-view">
//                      <li class="table-view-cell">Item 1 <span class="badge">4</span></li>
//                      <li class="table-view-cell">Item 2 <span class="badge">1</span></li>
//                      <li class="table-view-cell">Item 3 <span class="badge">5</span></li>
//                    </ul>

                    //Create and append select list
//                    var selectList = document.createElement("select");
//                    selectList.id = "listType";
//                    myDiv.appendChild(selectList);
//
//                    //Create and append the options
//                    for (var i = 0; i < parseJson.length; i++) {
//                        var option = document.createElement("option");
//                        option.value = parseJson[i].id;
//                        option.text = parseJson[i].title;
//                        selectList.appendChild(option);
//                    }
                    //alert(parseJson[0].title);
                        
                    }, 
                error: function(jqXHR, textStatus, errorThrown) {
                        alert(jqXHR.status);
                    },
               dataType: "jsonp"
            });
            
//            $.each(returnedJson.categories, function(i, field){
//                $('.testJson').append(field.title + " ");
//            });
            //app.myFunction("OK");
        });
        
        
//        document.getElementById('btnTest').addEventListener('click', app.dialogAlert);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var childElement = document.getElementById(id);
        
        
        
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        listeningElement.innerHTML = "HUY HEO";
//        
//        receivedElement.setAttribute('style', 'display:block;');
//        receivedElement.innerHTML = "HUY DOAN";
//
//        console.log('Received Event: ' + id);
        
        
    },
    myFunction: function(data) {
        alert(data);
    },
    
    callbackFunction: function () {
       alert('Volume Up Button is pressed!')
    },
    
    dialogAlert: function() {
       var message = "OK";
       var title = "ALERT";
       var buttonName = "Alert Button";

       navigator.notification.alert(message, alertCallback, title, buttonName);

       function alertCallback() {
          console.log("Alert is Dismissed!");
       }
        
    },
    
    getDataJson: function() {
        $('#listType').click(function () {
          $.getJSON('huyheo.tk/api/get_category_index', function (data) {
            console.log(data);
          });
        });

    }

};

app.initialize();