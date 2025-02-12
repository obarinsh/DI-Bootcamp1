# Part I
# First, we will analyze a simple string, l
# ike “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store
# the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:


class Text:
    def __init__(self, string):
        self.string = string

# a method to return the frequency of a word in the text (assume words
# are separated by whitespace) return None or a meaningful message.

    def frequency_of_word(self, user_word):
        words = self.string.lower().split()
        # print(words)
        counter = 0
        for word in words:
            if word == user_word:
                counter += 1

        if counter > 0:
            return f'"{user_word}" word appeared in a text {counter} times'
# a method that returns the most common word in the text.

    def most_common_word(self):
        words = self.string.lower().split()
        word_counts = {}
        for word in words:
            word_counts[word] = word_counts.get(
                word, 0) + 1

        max_count = max(word_counts.values())
        most_frequent = [word for word,
                         count in word_counts.items() if count == max_count]
        return most_frequent, max_count

# a method that returns a list of all the unique words in the text.
    def most_unique_word(self):
        words = self.string.lower().split()
        word_counts = {}
        for word in words:
            word_counts[word] = word_counts.get(
                word, 0) + 1

        min_count = min(word_counts.values())
        least_frequent = [word for word,
                          count in word_counts.items() if count == min_count]
        return least_frequent, min_count

    @classmethod
    def from_file(cls, filename):
        """Creates a Text instance from a file."""
        with open(filename, "r", encoding="utf-8") as file:
            content = file.read()  # Read entire file

        return cls(content)  # Create and return a Text instance


class TextModification(Text):


play1 = Text(
    'A good book would sometimes cost as much as a good house house house A good book sometimes cost as much as a good house house house')
# print(play1.frequency_of_word('a'))
# print(play1.most_common_word())
# print(play1.most_unique_word())

external_text = Text.from_file('the_stranger.txt')
print(external_text.frequency_of_word('a'))
print(external_text.most_common_word())
# print(external_text.most_unique_word())

# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.
