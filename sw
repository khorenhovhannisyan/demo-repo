warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/App.jsx b/src/App.jsx[m
[1mindex 93598d7..a522c9a 100644[m
[1m--- a/src/App.jsx[m
[1m+++ b/src/App.jsx[m
[36m@@ -44,9 +44,9 @@[m [mfunction App() {[m
 [m
   }[m
 [m
[31m-[m
   return ([m
    <div>[m
[32m+[m[32m    <p>hello</p>[m
     <AddUsers setInfo={handleAdd}></AddUsers>[m
    <UserList info={info} handleUp={handleUp} handleDown={handleDown} handleDelete={handleDelete} ></UserList>[m
    </div>[m
