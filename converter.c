#include <stdio.h>
#include <stdlib.h> // Needed for system("clear")

int main() {
    int choice;
    double temp, converted;

    // This clears the terminal screen like a real app launching
    system("clear");

    printf("\033[1;36m"); // Switch to Bold Cyan
    printf("************************************\n");
    printf("* THERMO-TECH PRO VERSION 1.0   *\n");
    printf("************************************\n");
    printf("\033[0m"); // Reset color

    printf("\n1. [Celsius]    -> [Fahrenheit]\n");
    printf("2. [Fahrenheit] -> [Celsius]\n");
    printf("\nSelect Option: ");
    
    if (scanf("%d", &choice) != 1) {
        printf("\033[1;31m\nError: Invalid Input!\033[0m\n");
        return 1;
    }

    printf("------------------------------------\n");
    printf("Enter Value: ");
    scanf("%lf", &temp);

    if (choice == 1) {
        converted = (temp * 9 / 5) + 32;
        printf("\n\033[1;32mRESULT: %g°C is equal to %g°F\033[0m\n", temp, converted);
    } else if (choice == 2) {
        converted = (temp - 32) * 5 / 9;
        printf("\n\033[1;32mRESULT: %g°F is equal to %g°C\033[0m\n", temp, converted);
    }

    printf("\n\033[1;36m************************************\033[0m\n");
    printf("   Thank you for using Thermo-Tech  \n\n");

    return 0;
}


