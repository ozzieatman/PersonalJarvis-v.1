var botui = new BotUI('botui-app') // id of container

botui.message.bot({ // show first message
  delay: 200,
  content: 'hello'
}).then(() => {
  return botui.message.bot({ // second one
    delay: 1000, // wait 1 sec.
    content: 'how are you?'
  })
}).then(() => {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'Good',
        value: 'good'
      },
      {
        text: 'Really Good',
        value: 'really_good'
      }
    ]
  })
}).then(res => {
  return botui.message.bot({
    delay: 1000,
    content: `You are feeling ${res.text}!`
  })
}).then(res => {
homeBot.message.add({
    delay: 1000,
    content: "Awesome! You can show buttons like the one you pressed."
  }).then(function () {
    return homeBot.message.add({
      delay: 1000,
      content: 'You can ask for text input like ..'
    });
  }).then(function () {
    return homeBot.message.add({
      delay: 1200,
      content: 'Whats your name?'
    });
  }).then(function () {
    return homeBot.action.text({
      delay: 800,
      action: {
        value: 'John Doe',
        placeholder: 'Your name'
      }
    });
  }).then(function (res) {
    return homeBot.message.bot({
      delay: 500,
      content: res.value + ' is a nice name!'
    });
