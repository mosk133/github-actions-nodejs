# Project Roles and Responsibilities

## Team Structure

### AlexandreCK - Project & Version Control Lead
**Responsibilities:**
- Oversees overall project architecture and technical direction
- Manages version control system and branch strategy
- Reviews and approves pull requests
- Ensures code quality standards are maintained
- Handles critical merge conflicts
- Maintains GitHub project board and milestones
- Monitors and optimizes GitHub Actions workflows


**Decision Authority:**
- Final say on architectural decisions
- Branch management and release approvals
- GitHub project configuration

### Mosk133 - Authentication & Dependencies Developer
**Responsibilities:**
- Implements and maintains authentication systems (login/register)
- Manages project dependencies and package updates
- Implements security best practices
- Documents auth-related processes
- Collaborates on session management

**Key Deliverables:**
- Secure authentication flows
- Updated dependency documentation
- Auth-related GitHub issues resolution

### ArnauACR - Assets & Budgeting Developer
**Responsibilities:**
- Creates and manages project assets (graphics, media, etc.)
- Implements budgeting components
- Optimizes asset delivery and performance
- Maintains style guides and design systems
- Documents asset usage guidelines

**Key Deliverables:**
- Optimized project assets
- Accurate budgeting components
- Asset usage documentation

## Branch Management

### Branch Structure
- `main` - Production-ready code (protected branch)
- `development` - Integration branch for all features
- `feature/[name]` - Feature branches (branched from `development`)

### Workflow Rules
1. All features must branch from `development` using `feature/[descriptive-name]`
2. Commits must reference GitHub issues (#123)
3. Pull requests require at least one approval
4. All GitHub Actions (linting) must pass before merge
5. Squash merge into `development` is preferred

## GitHub Process

### Issue Management
- Every task must have a GitHub issue
- Issues must be assigned to a milestone
- Labels should indicate priority and component

### Milestones
- Used to group related issues for sprints/releases
- Must have clear completion criteria
- Progress tracked in GitHub Projects

### GitHub Actions
- Automated linting on every push
- Required status checks for merging
- Notifications for failed workflows
