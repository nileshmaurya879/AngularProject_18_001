import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const authGaurdGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localVal = localStorage.getItem('myTest')
  if(localVal != null){
    return true;
  }else{
    router.navigateByUrl("login")
    return false;
  }
};
