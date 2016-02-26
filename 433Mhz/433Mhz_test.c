#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <stdbool.h>
#include <time.h>

// This is a dummy program to test the 433Mhz binary from xillwillx
// https://github.com/xillwillx/433Mhz/blob/master/RFSniffer.cpp
//
// It replicates certain functions using random numbers from the stdlib

int main(int argc, char *argv[]) {
    srand(time(NULL));
    
    bool CODE_RECEIVED = false;
    while(!CODE_RECEIVED) {
        // Is the switch available?
        if (rand() % 2) {
            // Not at all accurate, but this gives a reasonable error rate
            // for testing. (Roughly 30%)
            int value = rand() % 3;
            
            // Sleep for two seconds simulating capture event.
            sleep(2);
            if (value == 0) {
                // Unknown encoding
                printf("0\n");
            } else {
                // Simulate receiving a delay
                int delay = (rand() % 200) + 100;
                // "ReceivedValue(),ReceivedDelay()"
                printf("%i,%i\n", value, delay);
                CODE_RECEIVED = true;
            }
        }
    }

    return 0;
}
