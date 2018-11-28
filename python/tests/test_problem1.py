from problems.problem1 import (
    with_brute_force,
    with_an_object,
    with_a_set,
)


class TestProblem1(object):
    def test_it_should_return_true_if_2_numbers_add_up_to_k(self):
        assert True is with_brute_force([10, 3, 7], 17)
        assert True is with_an_object([10, 3, 7], 17)
        assert True is with_a_set([10, 3, 7], 17)

    def test_it_should_return_false_if_2_numbers_dont_add_up_to_k(self):
        assert False is with_brute_force([10, 3, 7], 14)
        assert False is with_an_object([10, 3, 7], 14)
        assert False is with_a_set([10, 3, 7], 14)

    def test_it_should_return_false_if_just_k_in_array(self):
        assert False is with_brute_force([10, 3, 7], 7)
        assert False is with_an_object([10, 3, 7], 7)
        assert False is with_a_set([10, 3, 7], 7)

    def test_it_can_handle_duplicate_numbers(self):
        assert True is with_brute_force([7, 7], 14)
        assert True is with_an_object([7, 7], 14)
        assert True is with_a_set([7, 7], 14)
