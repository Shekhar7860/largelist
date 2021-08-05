/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2019/2/23
 *
 */

import React from "react";
import { StickyForm } from "../../src";
import { Text, View, StyleSheet } from "react-native";
import type { IndexPath } from "../../src";

export class StickyFormExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data : [
  {
    sectionTitle: "Data",
    items: [
      {
        title: "1",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "2",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "3",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "4",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "5",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "6",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "7",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "8",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "9",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "10",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "11",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "12",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "13",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "14",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "15",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "16",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "17",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "18",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
    ],
  },
 
  
 

]
    }
  }
  static navigationOptions = {
    title: "StickyFormExample",
  };

  _list: StickyForm;
  componentDidMount = () => {
    if(this.props.route.params)
    {
    let updatedData = [...this.state.data]
    // console.log('st', this.props.route.params.data)
    // let array = []
    // array.push({"title" : "shekhar", "data" :[1,2,3,4,5,6]})
    // updatedData[0].items.push({
        
    //     data: [
    //       "shekhar",
    //       "24",
    //       "10th",
    //       "Patiala",
    //       "Patiala",
    //       "Punjab",
    //     ],
    //     title: "2"
    //   })
updatedData[0].items.push({
        title: "19",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      })
    this.setState({data : updatedData})
    }
  }
  render() {
    
     const {data} = this.state
     console.log('this', this.state.data[0].items)
    return (
      <StickyForm
        style={{ backgroundColor: "white" }}
        contentStyle={{ alignItems: "flex-start", width: "200%" }}
        data={data}
        extraData = {this.state}
        ref={(ref) => (this._list = ref)}
        heightForSection={() => 40}
        renderSection={this._renderSection}
        heightForIndexPath={() => 50}
        renderIndexPath={this._renderItem}
        onRefresh={() => {
          setTimeout(() => this._list.endRefresh(), 2000);
        }}
        onLoading={() => {
          setTimeout(() => this._list.endLoading(), 2000);
        }}
      />
    );
  }

  _renderHeader = () => {
    return (
      <View style={{ height: 80, flexDirection: "row" }}>
        <View style={styles.text}>
          <Text>Sr.No</Text>
        </View>
        {this.state.titles.map((title, index) => (
          <View style={styles.headerText} key={index}>
            <Text>{title}</Text>
          </View>
        ))}
      </View>
    );
  };

  _renderSection = (section: number) => {
    const sectionTitle = data[section].sectionTitle;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
          justifyContent: "center",
        }}
      >
        <View>
          <Text>{sectionTitle}</Text>
        </View>
      </View>
    );
  };

  _renderItem = (path: IndexPath) => {
    const item = data[path.section].items[path.row];
    return (
      <View style={styles.row}>
        <View style={styles.titleText}>
          <Text>{item ? item.title : null}</Text>
        </View>
        {item ? item.data.map((title, index) => (
          <View style={styles.text} key={index}>
            <Text>{title}</Text>
          </View>
        )) : null}
      </View>
    );
  };

  state = {
    titles: [
      "Name",
      "Age",
      "Class",
      "Place",
      "City",
      "State",
    ],
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#EEE",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  headerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  titleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#EEE",
  },
});

const data = [
  {
    sectionTitle: "Data",
    items: [
      {
        title: "",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "2",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "3",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "4",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "5",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "6",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "7",
        data: [
          "Akhil",
          "24",
          "10th",
          "Patiala",
          "Patiala",
          "Punjab",
        ],
      },
      {
        title: "8",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "9",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "10",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "11",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "12",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "13",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "14",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "15",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "16",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "17",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
      {
        title: "18",
        data: ["23.98", "24.88", "28.98", "29.98", "25.88", "30.98"],
      },
    ],
  },
 
  
 

];
