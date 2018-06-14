# Instructions

don't forget to tun npm install!!

1. init feature state:
  `ng generate feature auth/Auth -m auth/auth.module.ts --group`

2. Implement action creators for:
      Login         = '[Auth] Login',(payload: Authenticate)
      Logout        = '[Auth] Logout',
      LoginSuccess  = '[Auth] Login Success (payload: User)',
      LoginFailure  = '[Auth] Login Failure', 
      LoginRedirect = '[Auth] Login Redirect',

(find interface in models/user)
      
2. Create a reducer for auth:
`
  export interface State {
    loggedIn: boolean;
    user: User;
  }
`

create a selector: 'getLoogedIn' [call me when you are here]

3. Create an `auth.service` (under services directory) in a services folder and implement login:
`
login({ username, password }: Authenticate): Observable<User> {
    if (username !== 'admin' && password !== 'admin') {
      return throwError('invalid password');
    }
    return of({ name: 'Nir Kaufman' });
  }
`

5. Dispatch a login action from the auth.component:
`
  store.dispatch(new Login(info))
`
 

call me!!

