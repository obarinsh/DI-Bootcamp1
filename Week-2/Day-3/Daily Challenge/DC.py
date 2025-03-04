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
import math


class Circle:

    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("provide radius or diameter")

    def area(self):
        return math.pi * self.radius ** 2

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __repr__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area():.2f})"

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __gt__(self, other):
        return self.radius > other.radius


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


# Daily Challenge: The class you built only accepts the diameter parameter and doesn't account for the radius, and the method to compute the area is missing
# #
