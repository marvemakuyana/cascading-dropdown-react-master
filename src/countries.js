const countries = [
    {
      name: "Nigeria",
      value: "nigeria",
      states: [
        {
          name: "Abia",
          value: "abia",
          lgas: [{ name: "Aba", value: "aba" }, { name: "Oru", value: "oru" }]
        },
        {
          name: "Adamawa",
          value: "adamawa",
          lgas: [
            { name: "Demsa", value: "demsa" },
            { name: "Fufure", value: "fufure" }
          ]
        }
      ]
      
    },
    {
        name: "South Africa",
      value: "sa",
      states: [
        {
          name: "KZN",
          value: "kzn",
          lgas: [{ name: "Durban", value: "dur" }, { name: "Hilton", value: "or" }]
        },
        {
          name: "Gauteng",
          value: "adam",
          lgas: [
            { name: "Joburg", value: "dem" },
            { name: "Pretoria", value: "fuf" }
          ]
        }
      ]
    },
    {
        name: "Zimbabwe",
      value: "za",
      states: [
        {
          name: "Mashonaland",
          value: "har",
          lgas: [{ name: "Harare", value: "h" }, { name: "Ruwa", value: "ruwa" }]
        },
        {
          name: "Manicaland",
          value: "man",
          lgas: [
            { name: "Mutare", value: "mu" },
            { name: "Chipinge", value: "chi" }
          ]
        }
      ]
    }
  ];
  
  export default countries;
  