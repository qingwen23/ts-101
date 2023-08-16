# Typescript

Typescript is a **superset** of Javascript. This means any Javascript code is valid Typescript code (just not very good code).

Typescript types get deleted when it gets compiled into Javascript. Meaning the errors you see at dev time do not exist at runtime. It is only there to reduce bugs at dev time.

## If it only exists at dev time, is it any good at preventing bugs from entering production?
Yes, the compiler will simply fail and stop compiling the code if there are type errors. This kills the build and stops the code from being merged to master. We also have linting and testing steps to prevent any code that have type errors from getting merged to production.

