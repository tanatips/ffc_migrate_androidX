getData = function()
{
var data = [
    {
        "id":"1",
        "first_name":"Mr.1 ",
        "last_name":"last",
        "birthday":'01/01/1957',
        "sex":"Male",
        "father_id":"-1",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"2",
        "first_name":"Mrs. 2",
        "last_name":"last",
        "birthday":'01/01/1957',
        "sex":"Female",
        "father_id":"-3",
        "mother_id":"-4",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"3",
        "first_name":"Mr. 3",
        "last_name":"last",
        "birthday":'01/01/1977',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,{
        "id":"4",
        "first_name":"Mr. 4",
        "last_name":"last",
        "birthday":'01/01/1987',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"5",
        "first_name":"Mr. 5",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
     ,
    {
        "id":"6",
        "first_name":"Mr. 6",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"1",
        "mother_id":"2",
        "status":"dead",
        "picture":"images/ironman3.jpg"
    }
     ,
    {
        "id":"7",
        "first_name":"Mr. 7",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"Pregnancy",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"8",
        "first_name":"Mr. 8",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"9",
        "first_name":"Mr. 9",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"1",
        "mother_id":"2",
        "status":"MisCarriage",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"10",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"-1",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"11",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"3",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"12",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"-1",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"13",
        "first_name":"Mr. 10",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"3",
        "mother_id":"12",
        "status":"live",
        "picture":"images/pepper.jpg"
    }

    ,
    {
        "id":"15",
        "first_name":"Mr. 15",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"13",
        "mother_id":"16",
        "status":"live" ,
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"16",
        "first_name":"Mr. 16",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"-2",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"17",
        "first_name":"Mr. 17",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"-2",
        "mother_id":"-2",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"18",
        "first_name":"Mr. 17",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"13",
        "mother_id":"16",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"19",
        "first_name":"Mr. 19",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"13",
        "mother_id":"16",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"20",
        "first_name":"Mr. 19",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"-1",
        "mother_id":"-1",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"21",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"20",
        "mother_id":"19",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"22",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"4",
        "mother_id":"17",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"23",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"24",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"5",
        "mother_id":"23",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"25",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"26",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"21",
        "mother_id":"25",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"27",
        "first_name":"Mr. 21",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"21",
        "mother_id":"25",
        "status":"live",
        "picture":"images/pepper.jpg"
    },
    {
        "id":"28",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"24",
        "mother_id":"27",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"29",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"24",
        "mother_id":"27",
        "status":"live",
        "picture":"images/ironman3.jpg"
    }
    ,
    {
        "id":"30",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"31",
        "first_name":"Mr. 31",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"32",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"33",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"28",
        "mother_id":"31",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"34",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg"
    },
    {
        "id":"35",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"33",
        "mother_id":"34",
        "status":"live",
        "picture":"images/pepper.jpg"
    }
    ,
    {
        "id":"36",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Male",
        "father_id":"",
        "mother_id":"",
        "status":"live",
        "picture":"images/ironman3.jpg",
        "child_type":"adopted_child"
    },
    {
        "id":"37",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"8",
        "mother_id":"36",
        "status":"live",
        "picture":"images/pepper.jpg",
        "child_type":"adopted_child"
    },
    {
        "id":"38",
        "first_name":"Mr. 28",
        "last_name":"last",
        "birthday":'01/01/1997',
        "sex":"Female",
        "father_id":"8",
        "mother_id":"36",
        "status":"live",
        "picture":"images/pepper.jpg",
        "child_type":"foster_child"
    }

];
var spouse = [
        {
            "id1":"1",
            "id2":"2",
            "relationStatus":"marriage"
        },
        {
            "id1":"3",
            "id2":"12",
            "relationStatus":"engagement"
        },
        {
            "id1":"13",
            "id2":"16",
            "relationStatus":"separation_in_fact"
        },
        {
            "id1":"4",
            "id2":"17",
            "relationStatus":"legal_separation"
        },
        {
            "id1":"19",
            "id2":"20",
            "relationStatus":"legal_cohabitation"
        },
        {
            "id1":"5",
            "id2":"23",
            "relationStatus":"cohabitation"
        },
        {
            "id1":"24",
            "id2":"27",
            "relationStatus":"love_affair"
        }
        ,
        {
            "id1":"28",
            "id2":"31",
            "relationStatus":"commited_relationship"
        }
        ,
        {
            "id1":"29",
            "id2":"32",
            "relationStatus":"non_sentimental_cohabitation_and_separation"
        }
        ,
        {
            "id1":"33",
            "id2":"34",
            "relationStatus":"temporary_relation_one_night_stand"
        }
        ,
        {
            "id1":"8",
            "id2":"36",
            "relationStatus":"temporary_relation_one_night_stand"
        }
];
 return [{"data":data,"spouse":spouse}];
}