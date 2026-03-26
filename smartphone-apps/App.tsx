import { DateTime } from "luxon"
import { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"


export default function App() {
  const [time, setTime] = useState(DateTime.now())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(DateTime.now())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.text, { marginTop: '15%'}]}>
      Clock Customiser
      </Text>

      <View style={styles.container}>
        <Text style={styles.text}>{time.toFormat("hh:mm:ss")}
      </Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
})

