# IsInViewPort
 This project is a demo which is judge if the Component is in device viewport 
 
 
 ##how to use 
```javascrip
import InViewPort from './InViewPort'





checkVisible(visibleKey,isVisible) {
      if(isVisible){
        console.log(visibleKey +' is ' +isVisible)
      }
  }

  render() {


    return (
      <ScrollView style={{ flex: 1 }}>
        <InViewPort visibleKey = {1} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'blue' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>1</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {2}  onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'green' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>2</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {3} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>3</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey={4}  onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'orange' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>4</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {5} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500 }}>
            <Text>View is visible?</Text>
            <Text style={{fontSize:30}}>5</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {6}  onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'green' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>6</Text>
          </View>
        </InViewPort>

        <InViewPort visibleKey = {7} onChange={this.checkVisible.bind(this) }>
          <View style={{ flex: 1, height: 500, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>View is visible?</Text>
            <Text style={{fontSize:30}}>7</Text>
          </View>
        </InViewPort>
      </ScrollView>
    );
  }

```
