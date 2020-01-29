# Reproduction for ng-packagr issue

That is the counterpart to the `packagr-rc7` branch which shows the issue.
Here with rc4 it still works as expected

* run `npm ci`
* run `ng build lib1 --prod`

main entry point plus both secondary entry points are built