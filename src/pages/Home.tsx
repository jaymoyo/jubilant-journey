import {
  IonButton,
  IonCol,
  IonLabel,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BigTasks } from "../data/queries";

import "./Home.css";

const SupaList: React.FC = () => {
  const response = BigTasks();
  console.log("3, ", response);
  // useIonViewWillEnter(() => {
  //   console.log("3, ", response);
  // });

  switch (response.isLoading) {
    case true:
      return <>{"Loading..."}</>;
    case false:
      const listTasks = response.data.map(
        (data: any) => <ListItem key={data.id} value={data.task} />
        //console.log(data)
      );
      return <>{listTasks}</>;
    default:
      return <>{"Other State"}</>;
  }
};

//Todos();

const ListItem: React.FC<{ value: string }> = (props) => {
  return (
    <IonItem>
      <IonLabel>{props.value}</IonLabel>
    </IonItem>
  );
};

const DataList: React.FC<{ numbers: number[] }> = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number: number) => (
    <ListItem key={number.toString()} value={number.toString()} />
  ));
  return <>{listItems}</>;
};

const numbers = [1, 2, 3, 4, 5];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton>Test Button</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DataList numbers={numbers} />
              <SupaList />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
