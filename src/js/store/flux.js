const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      clients: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getContacts: async () => {
        const contacts = await fetch(
          "https://playground.4geeks.com/contact/agendas/virgilios_agenda"
        ).then(async (res) => {
          if (res.status === 200) {
            const query = await fetch(
              "https://playground.4geeks.com/contact/agendas/virgilios_agenda/contacts"
            );
            const consult = await query.json();

            setStore({ clients: consult });
          } else {
            await fetch(
              "https://playground.4geeks.com/contact/agendas/virgilios_agenda",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            getActions().getContacts();
          }
        });
      },
    },
    pepecuadrado: { Holi: "Soy Pepe" },
  };
};

export default getState;
