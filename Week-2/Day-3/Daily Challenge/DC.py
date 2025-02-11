# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles
import turtle


class Circle:

    def __init__(self, diameter):
        self.diameter = diameter

    def __add__(self, other):
        return Circle(self.diameter+other.diameter)

    def __repr__(self):
        return {self.diameter}

    def __eq__(self, other):
        return self.diameter == other.diameter

    def __lt__(self, other):
        return self.diameter < other.diameter

    def __gt__(self, other):
        return self.diameter > other.diameter


circles = []
first_circle = Circle(5)
second_circle = Circle(2)
new_cicrcle = first_circle+second_circle


circles.append(first_circle)
circles.append(second_circle)
print(circles)
sorted_circles = sorted(circles)
print(sorted_circles)

print(new_cicrcle.diameter)
print(first_circle > second_circle)
print(second_circle > first_circle)
print(second_circle == first_circle)

t = turtle.Turtle()
t.circle(sorted_circles)

turtle.done()
