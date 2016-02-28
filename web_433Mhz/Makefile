all: 433Mhz

RFSniffer: RCSwitch.o 433Mhz.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi
	

clean:
	$(RM) *.o 433Mhz
