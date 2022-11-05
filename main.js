const print = console.log

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

new ConsoleCommand("uri", "Converts strings from and to uri format", ["[encode|decode|com-encode|com-decode]", "string..."], function (args) {
	var mode = args.shift()
    switch (mode) {
    	case 'decode':
	    	print(decodeURI(args.join(" ")))
    	break;
    	case 'encode':
    		print(encodeURI(args.join(" ")))
    	break;
    	case 'com-decode':
    		print(decodeURIComponent(args.join(" ")))
    	break;
    	case 'com-encode':
    		print(encodeURIComponent(args.join(" ")))
    	break;
    	default:
    		print("invalid arg " + mode)
    }
})

new ConsoleCommand("coin", "Flips a coin and prints heads or tails", ["<none>"], function (args) {
  let r = getRandomInt(1, 3)
  print("\n\n")
  if (r === 1) {
    print("Heads !")
  } else {
    print("Tails !")
  }
})