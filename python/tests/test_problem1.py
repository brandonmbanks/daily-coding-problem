from problems.problem1 import two_num_sum


class TestProblem1(object):
    def test_it_should_return_true_if_2_numbers_add_up_to_k(self):
        assert True is two_num_sum([10, 3, 7], 17)

    def test_it_should_return_false_if_2_numbers_dont_add_up_to_k(self):
        assert False is two_num_sum([10, 3, 7], 14)

    def test_it_should_return_false_if_just_k_in_array(self):
        assert False is two_num_sum([10, 3, 7], 7)

    def test_it_can_handle_duplicate_numbers(self):
        assert True is two_num_sum([7, 7], 14)
