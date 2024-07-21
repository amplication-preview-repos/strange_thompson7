import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EndeavorList } from "./endeavor/EndeavorList";
import { EndeavorCreate } from "./endeavor/EndeavorCreate";
import { EndeavorEdit } from "./endeavor/EndeavorEdit";
import { EndeavorShow } from "./endeavor/EndeavorShow";
import { ParentList } from "./parent/ParentList";
import { ParentCreate } from "./parent/ParentCreate";
import { ParentEdit } from "./parent/ParentEdit";
import { ParentShow } from "./parent/ParentShow";
import { KidList } from "./kid/KidList";
import { KidCreate } from "./kid/KidCreate";
import { KidEdit } from "./kid/KidEdit";
import { KidShow } from "./kid/KidShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { PrizeList } from "./prize/PrizeList";
import { PrizeCreate } from "./prize/PrizeCreate";
import { PrizeEdit } from "./prize/PrizeEdit";
import { PrizeShow } from "./prize/PrizeShow";
import { PrizeProgressList } from "./prizeProgress/PrizeProgressList";
import { PrizeProgressCreate } from "./prizeProgress/PrizeProgressCreate";
import { PrizeProgressEdit } from "./prizeProgress/PrizeProgressEdit";
import { PrizeProgressShow } from "./prizeProgress/PrizeProgressShow";
import { EndeavorProgressList } from "./endeavorProgress/EndeavorProgressList";
import { EndeavorProgressCreate } from "./endeavorProgress/EndeavorProgressCreate";
import { EndeavorProgressEdit } from "./endeavorProgress/EndeavorProgressEdit";
import { EndeavorProgressShow } from "./endeavorProgress/EndeavorProgressShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FamilyEndeavor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Endeavor"
          list={EndeavorList}
          edit={EndeavorEdit}
          create={EndeavorCreate}
          show={EndeavorShow}
        />
        <Resource
          name="Parent"
          list={ParentList}
          edit={ParentEdit}
          create={ParentCreate}
          show={ParentShow}
        />
        <Resource
          name="Kid"
          list={KidList}
          edit={KidEdit}
          create={KidCreate}
          show={KidShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="Prize"
          list={PrizeList}
          edit={PrizeEdit}
          create={PrizeCreate}
          show={PrizeShow}
        />
        <Resource
          name="PrizeProgress"
          list={PrizeProgressList}
          edit={PrizeProgressEdit}
          create={PrizeProgressCreate}
          show={PrizeProgressShow}
        />
        <Resource
          name="EndeavorProgress"
          list={EndeavorProgressList}
          edit={EndeavorProgressEdit}
          create={EndeavorProgressCreate}
          show={EndeavorProgressShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
