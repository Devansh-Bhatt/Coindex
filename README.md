# COINDEX

Get ALL Crypto Coin rates in real-time through your command line interface!

Get your free API key from [coinapi.io](https://www.coinapi.io/) and set it through this app to get the rate of any coin you want!

## Installing

1. Fork this repository and clone it.
2. Make sure you have Node.js installed. Install it from [nodejs.org](https://nodejs.org/en/download/).

Congratulations! Your app is ready!

To check if it's running:
- Type `coindex` on your command line interface, and it should display a recognizable command with options for `key`, `check`, and `help`.

## Commands

All commands begin with the keyword `coindex`. You can get a list of all sub-commands of any command by appending `-h`.

1. `key`
   - The `key` command helps you set, show, and remove the API key you obtained from [coinapi.io](https://www.coinapi.io/).
   - Sub-commands:
     - `key set`: Sets the API key.
     - `key show`: Shows your current API key.
     - `key remove`: Removes your current API key.

2. `check`
   - The `check` command should be used after setting up your key. It is the main command that shows you the coin rates.
   - Sub-command:
     - `check price`: Shows the prices of default coins: BTC (Bitcoin), ETH (Ethereum), and XRP (Ripple) in INR currency.
     - To get the rates of particular coins and a specific currency, use the following option commands after `check price`:
       - `--coin` and `--curr`
       - `--coin` specifies the coin(s) you want the rate of. Multiple coins should be separated by commas.
       - `--curr` specifies the currency in which you want the rate.
       - Example: `coindex check price --coin=BTC,ETH --curr=USD`
         - This command will give the rates of Bitcoin and Ethereum in US Dollars.
