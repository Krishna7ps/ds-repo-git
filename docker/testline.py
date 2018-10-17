#!/usr/bin/env python3
from random import choice
from random import randint
from os import system
import time
while True:
    i=randint(10,50)
    print("\n"*i)
    print(i)
    print("--"*40)
    time.sleep(1)
    system("clear")
