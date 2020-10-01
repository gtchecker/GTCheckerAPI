/**
 * @module gtchecker.js
 * @author Joker
 * @copyright Joker 2019-2020
 * @description Custom Module for interacting with GTChecker.com API
 * @license MIT
 **/

const wump = require("wumpfetch");
const GTCV = require("../package.json").version;

module.exports = class CheckFor {
  
  /**
   * Create CheckFor class
   * @constructor
   * @param {string} token - Your GTChecker token
   **/
  
  constructor(token) {
    this.token = token;
    this.version = "v1";
    this.baseurl = "https://gtchecker.com/api/";
    this.useragent =  `GTChecker-JS/${GTCV}`;
  }

  /**
   * Get Gamertag Status From API.
   **/

   Gamertag(gt) {
    let regex = /[a-z0-9_-]{5,16}/i;

    if (!this.token) {
      throw new TypeError("API token not provided");
    }
    
    if (!regex.test(gt)) { 
      throw new TypeError("GamerTag must be Alpha-Numerical");
    }
    
    return new Promise(async (resolve, reject) => {
      try {
        const res = await wump(`${this.baseurl}${this.version}/xbox?gamertag=${gt}`, {
          method: "POST", 
          headers: { 
            "User-Agent": this.useragent,
            "Authorization": this.token 
          }
        }).send();
        resolve(res.json());
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }

  /**
   * Get PSN Status From API.
   **/

  PSN(psn) {
    let regex = /[a-z0-9_-]{5,16}/i;

    if (!this.token) { 
      throw new TypeError("API token not provided");
    }

    if (!regex.test(psn)) {
      throw new TypeError("PSN must be Alpha-Numerical");
    }

    return new Promise(async (resolve, reject) => {
      try {
        const res = await wump(`${this.baseurl}${this.version}/psn?psn=${psn}`, {
          method: "POST", 
          headers: { 
            "User-Agent": this.useragent,
            "Authorization": this.token 
          }
        }).send();
        resolve(res.json());
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }
};
