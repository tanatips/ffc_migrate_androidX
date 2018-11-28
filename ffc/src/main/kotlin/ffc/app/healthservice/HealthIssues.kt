package ffc.app.healthservice

import ffc.app.util.RepoCallback
import ffc.entity.Person
import ffc.entity.healthcare.analyze.HealthChecked
import ffc.entity.healthcare.analyze.HealthIssue
import ffc.entity.healthcare.analyze.HealthProblem

interface HealthIssues {

    fun issueOf(person: Person, dsl: RepoCallback<List<HealthIssue>>.() -> Unit)
}

fun healthIssues(): HealthIssues = DummyHealthIssue()

class DummyHealthIssue : HealthIssues {

    override fun issueOf(person: Person, dsl: RepoCallback<List<HealthIssue>>.() -> Unit) {
        val callback = RepoCallback<List<HealthIssue>>().apply(dsl)
        val issues = listOf(
            HealthProblem(HealthIssue.Issue.HT, HealthIssue.Severity.HI),
            HealthProblem(HealthIssue.Issue.DM, HealthIssue.Severity.LOW),
            HealthProblem(HealthIssue.Issue.CVD, HealthIssue.Severity.VERY_HI),
            HealthProblem(HealthIssue.Issue.ACTIVITIES, HealthIssue.Severity.MID),
            HealthChecked(HealthIssue.Issue.FALL_RISK),
            HealthChecked(HealthIssue.Issue.CATARACT, haveIssue = true)
        )
        callback.onFound!!.invoke(issues)
    }
}