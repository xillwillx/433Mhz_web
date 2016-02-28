all: 433Mhz

433Mhz: RCSwitch.o 433Mhz.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi

clean:
	$(RM) *.o 433Mhz
