const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon?: React.ReactNode }) => {
    return (
        <div className="group relative p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--secondary)]/50 transition-all duration-300 hover:shadow-xl dark:bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/5 flex items-center justify-center mb-6 text-[var(--secondary)] group-hover:scale-110 transition-transform">
                    {icon || <div className="w-6 h-6 bg-current rounded-full" />}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] dark:group-hover:text-white transition-colors">
                    {title}
                </h3>

                <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
