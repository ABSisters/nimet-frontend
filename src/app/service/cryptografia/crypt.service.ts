import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class CryptService {

  criptografasr(conteudo: any, key:  any): string{
    key = CryptoJS.enc.Utf8.parse(key);
    return '' + CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(conteudo), key, this.getCryptOptions(key));
  }

  descriptografar(conteudo: any, key:  any): string {
    if (!conteudo.statusCode){
      key = CryptoJS.enc.Utf8.parse(key);
      return JSON.parse(CryptoJS.AES.decrypt(conteudo,key,this.getCryptOptions(key)).toString(CryptoJS.enc.Utf8));
    } else {
      return conteudo
    }
  }

  getCryptOptions(key: any): any {
    return {keySize: 128 / 8, key: {key}, mode:CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7};
  }

}
