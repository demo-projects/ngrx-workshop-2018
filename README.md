# Instructions

1. Implement action creators for:
      Login         = '[Auth] Login',
      Logout        = '[Auth] Logout',
      LoginSuccess  = '[Auth] Login Success',
      LoginFailure  = '[Auth] Login Failure',
      LoginRedirect = '[Auth] Login Redirect',
2. Implement a reducer case for LoginSuccess and Logout and a selector for loginStatus
3. Create an auth service in a services folder and implement login
4. Create a route guard to protect routes by checking login state 
4. Implement Side Effects for this flow  
