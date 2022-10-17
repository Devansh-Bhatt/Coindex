                                                       /****COINDEX****\

Get ALL Crypto Coin rates in real time through your command line interface!!

Get your free api key from [1]:https://coinlayer.com/ and set it through this app get any coin rate you want !!!



1.Installing
->Fork this repository and clone it.
->Make sure you have Node.js installed.Install it from [2]:https://nodejs.org/en/download/
If you are done with the above two then Congrats...Your app is ready !!

To check if is running:
->Type coindex on your command line interface and it should result in recongnizable command with commands key,check and help.


2.Commands<br />
All commands begin with the keyword 'coindex'.You can get list of all sub command of any command by appnding it with -h.<br />
        1.key<br />
          The key command helps you set,show and remove api key which you got from [1]:https://coinlayer.com/<br />
          1.key set<br />
            This command is to set the api key.<br />
          2.key show<br />
            This command will show you your current api key.<br />
          3.key remove<br />
            This command will remove your current api key.<br />
        2.check<br />
          The check command should be used after setting up your key.It is the main command that will show you the coin rates.<br />
          1.check price<br />
            This command will show you the prices of default coins which are BTC(Bitcoin),ETH(Ethereum) and XRP(Ripple) in INR currency.<br />
            To get a rates of particular coins and particular currency there are two option commands followed by the check price command:<br />
            -> --coin  &  --curr<br />
            	--coin is to specify the coin you want the rate of.Multiple coins should be separated by comma.<br />
            	--curr is to specify the currency in which you want the rate in.<br />
            	example: coindex check price --coin=BTC,ETH --curr=USD <br />
                         This command will give the rates of Bitcoin and Ethereum in US Dollars.<br />
                     
