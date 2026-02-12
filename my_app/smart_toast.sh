#!/bin/bash

# 1. Setup the Stop Notification immediately
termux-notification --id "prof_goal" \
    --title "Termux Pro Mode" \
    --content "Toasting active. Tap STOP to end." \
    --button1 "STOP" \
    --button1-action "rm -f $HOME/stop_now.txt && touch $HOME/stop_now.txt"

# Clear any old stop signals
rm -f $HOME/stop_now.txt

echo "Toasting started! You can close Termux now."

# 2. The Loop
while true; do
  # Check if the STOP button was pressed
  if [ -f $HOME/stop_now.txt ]; then
    termux-notification-remove "prof_goal"
    rm $HOME/stop_now.txt
    termux-toast "Loop Terminated"
    exit 0
  fi

  # Show message for ~10 seconds (3 pulses of a long toast)
  for i in {1..3}; do
    termux-toast -b "#101010" -c "#00FF00" "I will become a professional with termux"
    sleep 3
  done

  # Gap of 10 seconds between animations
  sleep 10
done

