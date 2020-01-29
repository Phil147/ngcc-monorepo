# Reproduction for ng-packagr issue

The relevant part is the library `lib1`, you can ignore everything else.
The crucial part are the spec files, they are excluded in the tsconfig but the imports there seem to
be used to determine the `dependencies` of an entry point.
In a large component library because of this we run into an endless loop and in `heap out of memory`

* run `npm ci`
* run `ng build lib1 --prod`

You will see that only the main entry point is built :/